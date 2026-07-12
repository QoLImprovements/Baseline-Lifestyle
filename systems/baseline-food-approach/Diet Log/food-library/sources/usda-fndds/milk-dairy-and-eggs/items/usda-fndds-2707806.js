/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707806",
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
  "name": "Biscuit, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 38.8,
    "energy_kcal": 374.0,
    "fat_g": 20.4,
    "fibre_g": 2.2,
    "folate_ug": 77.0,
    "iron_mg": 2.5,
    "magnesium_mg": 16.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 472.0,
    "potassium_mg": 126.0,
    "protein_g": 8.7,
    "salt_g": 2.365,
    "sat_fat_g": 12.5,
    "sodium_mg": 946.0,
    "sugar_g": 3.52,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707806",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
