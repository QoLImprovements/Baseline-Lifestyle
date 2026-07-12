/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707807",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-biscuit",
      "kind": "unit",
      "label": "1 biscuit"
    }
  ],
  "name": "Biscuit with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 46.5,
    "energy_kcal": 363.0,
    "fat_g": 17.0,
    "fibre_g": 2.7,
    "folate_ug": 76.0,
    "iron_mg": 2.66,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 436.0,
    "potassium_mg": 192.0,
    "protein_g": 6.7,
    "salt_g": 2.21,
    "sat_fat_g": 10.6,
    "sodium_mg": 884.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707807",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
