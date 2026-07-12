/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709083",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Flavored rice and pasta mixture, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 17.3,
    "energy_kcal": 111.0,
    "fat_g": 3.43,
    "fibre_g": 0.6,
    "folate_ug": 36.0,
    "iron_mg": 0.92,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 60.0,
    "protein_g": 2.59,
    "salt_g": 0.3925,
    "sat_fat_g": 0.832,
    "sodium_mg": 157.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709083",
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
