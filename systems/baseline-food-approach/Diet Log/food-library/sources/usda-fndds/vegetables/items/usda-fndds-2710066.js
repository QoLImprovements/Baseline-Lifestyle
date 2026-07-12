/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fried vegetables",
  "id": "usda-fndds-2710066",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-pakora",
      "kind": "unit",
      "label": "1 pakora"
    }
  ],
  "name": "Pakora",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 16.2,
    "energy_kcal": 125.0,
    "fat_g": 4.77,
    "fibre_g": 3.2,
    "folate_ug": 129.0,
    "iron_mg": 1.12,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 214.0,
    "protein_g": 4.92,
    "salt_g": 0.95,
    "sat_fat_g": 0.598,
    "sodium_mg": 380.0,
    "sugar_g": 2.97,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710066",
  "state": "Unspecified",
  "subcategory": "Fried vegetables",
  "tags": [
    "fried-vegetables",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
