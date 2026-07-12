/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-ball-3-dia",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2710139",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "1-ball-3-dia",
      "kind": "unit",
      "label": "1 ball (3\" dia)"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Green plantain with cracklings, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 27.0,
    "energy_kcal": 358.0,
    "fat_g": 22.8,
    "fibre_g": 1.4,
    "folate_ug": 9.0,
    "iron_mg": 0.68,
    "magnesium_mg": 33.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 52.0,
    "potassium_mg": 405.0,
    "protein_g": 13.2,
    "salt_g": 0.8725,
    "sat_fat_g": 5.56,
    "sodium_mg": 349.0,
    "sugar_g": 14.8,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 2.25,
    "vitamin_k_ug": 35.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710139",
  "state": "Unspecified",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "other-starchy-vegetables",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
