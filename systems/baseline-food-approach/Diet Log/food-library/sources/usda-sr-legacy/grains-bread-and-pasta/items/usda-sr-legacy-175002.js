/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "medium",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175002",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "mini",
      "kind": "unit",
      "label": "mini"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "extra-large",
      "kind": "unit",
      "label": "extra large"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 139.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Muffins, corn, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 51.0,
    "energy_kcal": 1280.0,
    "fat_g": 8.4,
    "fibre_g": 3.4,
    "folate_ug": 62.0,
    "iron_mg": 2.81,
    "magnesium_mg": 32.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 284.0,
    "potassium_mg": 69.0,
    "protein_g": 5.9,
    "salt_g": 0.9625,
    "sat_fat_g": 1.35,
    "sodium_mg": 385.0,
    "sugar_g": 17.8,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175002",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
