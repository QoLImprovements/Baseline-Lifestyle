/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709089",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 167.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice dressing",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 17.6,
    "energy_kcal": 110.0,
    "fat_g": 3.29,
    "fibre_g": 0.6,
    "folate_ug": 36.0,
    "iron_mg": 0.92,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 59.0,
    "protein_g": 1.98,
    "salt_g": 1.5,
    "sat_fat_g": 0.663,
    "sodium_mg": 600.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709089",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "condiments-and-sauces",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
