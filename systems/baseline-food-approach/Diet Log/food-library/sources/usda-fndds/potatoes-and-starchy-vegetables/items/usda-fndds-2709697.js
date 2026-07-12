/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-large",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709697",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-oz-raw-yields",
      "kind": "unit",
      "label": "1 oz, raw, yields"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Sweet potato, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 17.1,
    "energy_kcal": 115.0,
    "fat_g": 4.53,
    "fibre_g": 3.0,
    "folate_ug": 9.0,
    "iron_mg": 0.4,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 37.0,
    "potassium_mg": 481.0,
    "protein_g": 1.58,
    "salt_g": 0.4025,
    "sat_fat_g": 1.11,
    "sodium_mg": 161.0,
    "sugar_g": 6.0,
    "vitamin_a_ug": 684.0,
    "vitamin_c_mg": 12.4,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709697",
  "state": "Unspecified",
  "subcategory": "Other red and orange vegetables",
  "tags": [
    "other-red-and-orange-vegetables",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
