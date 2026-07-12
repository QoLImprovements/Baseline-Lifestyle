/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Dirty rice",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 17.2,
    "energy_kcal": 112.0,
    "fat_g": 2.25,
    "fibre_g": 0.6,
    "folate_ug": 62.0,
    "iron_mg": 1.77,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 85.0,
    "protein_g": 5.12,
    "salt_g": 0.79,
    "sat_fat_g": 0.403,
    "sodium_mg": 316.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 208.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709078",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "grains-bread-and-pasta",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
