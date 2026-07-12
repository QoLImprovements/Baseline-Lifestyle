/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Celery, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 7.61,
    "energy_kcal": 35.0,
    "fat_g": 0.15,
    "fibre_g": 1.3,
    "folate_ug": 25.0,
    "iron_mg": 0.0,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 220.0,
    "protein_g": 0.41,
    "salt_g": 2.55,
    "sat_fat_g": 0.035,
    "sodium_mg": 1020.0,
    "sugar_g": 5.98,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 24.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710072",
  "state": "Unspecified",
  "subcategory": "Olives, pickles, pickled vegetables",
  "tags": [
    "olives-pickles-pickled-vegetables",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
