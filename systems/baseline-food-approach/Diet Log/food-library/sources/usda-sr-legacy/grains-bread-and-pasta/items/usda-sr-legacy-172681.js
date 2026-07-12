/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172681",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "slice-large",
      "kind": "unit",
      "label": "slice, large"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    }
  ],
  "name": "Bread, raisin, enriched, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 56.9,
    "energy_kcal": 1240.0,
    "fat_g": 4.8,
    "fibre_g": 4.7,
    "folate_ug": 98.0,
    "iron_mg": 3.15,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 246.0,
    "protein_g": 8.6,
    "salt_g": 0.9425,
    "sat_fat_g": 1.18,
    "sodium_mg": 377.0,
    "sugar_g": 6.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172681",
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
