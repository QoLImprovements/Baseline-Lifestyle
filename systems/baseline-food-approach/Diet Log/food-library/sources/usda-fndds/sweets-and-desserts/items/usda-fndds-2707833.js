/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-large",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707833",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-bite-size",
      "kind": "unit",
      "label": "1 bite size"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Muffin, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 50.9,
    "energy_kcal": 395.0,
    "fat_g": 18.8,
    "fibre_g": 1.9,
    "folate_ug": 41.0,
    "iron_mg": 3.31,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 144.0,
    "potassium_mg": 178.0,
    "protein_g": 6.54,
    "salt_g": 0.8475,
    "sat_fat_g": 4.65,
    "sodium_mg": 339.0,
    "sugar_g": 26.0,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.66,
    "vitamin_k_ug": 13.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707833",
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
