/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice-small",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174911",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "slice-small",
      "kind": "unit",
      "label": "slice, small"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "slice-medium",
      "kind": "unit",
      "label": "slice, medium"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "slice-large",
      "kind": "unit",
      "label": "slice, large"
    }
  ],
  "name": "Bread, french or vienna, toasted (includes sourdough)",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 61.9,
    "energy_kcal": 319.0,
    "fat_g": 2.14,
    "fibre_g": 3.1,
    "folate_ug": 140.0,
    "iron_mg": 3.87,
    "magnesium_mg": 31.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 126.0,
    "potassium_mg": 140.0,
    "protein_g": 13.0,
    "salt_g": 1.8,
    "sat_fat_g": 0.502,
    "sodium_mg": 720.0,
    "sugar_g": 3.59,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174911",
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
