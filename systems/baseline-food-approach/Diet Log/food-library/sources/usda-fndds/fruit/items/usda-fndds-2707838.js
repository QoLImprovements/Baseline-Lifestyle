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
  "id": "usda-fndds-2707838",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "1-muffin-2-3-4-dia-include-jenny-s-cuisine",
      "kind": "unit",
      "label": "1 muffin (2-3/4\" dia) (include Jenny's Cuisine)"
    }
  ],
  "name": "Muffin, bran with fruit, lowfat",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 40.0,
    "energy_kcal": 179.0,
    "fat_g": 1.5,
    "fibre_g": 2.7,
    "folate_ug": 21.0,
    "iron_mg": 1.7,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 259.0,
    "protein_g": 5.42,
    "salt_g": 1.0825,
    "sat_fat_g": 0.408,
    "sodium_mg": 433.0,
    "sugar_g": 20.3,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707838",
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
