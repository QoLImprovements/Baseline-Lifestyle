/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707809",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    }
  ],
  "name": "Scone, with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 196.0,
    "carbs_g": 51.2,
    "energy_kcal": 374.0,
    "fat_g": 16.5,
    "fibre_g": 1.5,
    "folate_ug": 49.0,
    "iron_mg": 2.78,
    "magnesium_mg": 19.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 146.0,
    "potassium_mg": 181.0,
    "protein_g": 6.33,
    "salt_g": 1.01,
    "sat_fat_g": 8.78,
    "sodium_mg": 404.0,
    "sugar_g": 18.6,
    "vitamin_a_ug": 161.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707809",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
