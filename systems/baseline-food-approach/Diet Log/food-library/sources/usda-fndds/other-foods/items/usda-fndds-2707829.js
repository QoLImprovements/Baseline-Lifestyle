/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-medium",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707829",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
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
      "gramsPerUnit": 180.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-bite-size",
      "kind": "unit",
      "label": "1 bite size"
    }
  ],
  "name": "Muffin, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 53.0,
    "energy_kcal": 375.0,
    "fat_g": 16.1,
    "fibre_g": 1.1,
    "folate_ug": 48.0,
    "iron_mg": 1.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 146.0,
    "potassium_mg": 121.0,
    "protein_g": 4.49,
    "salt_g": 0.84,
    "sat_fat_g": 2.84,
    "sodium_mg": 336.0,
    "sugar_g": 31.5,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 39.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707829",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
