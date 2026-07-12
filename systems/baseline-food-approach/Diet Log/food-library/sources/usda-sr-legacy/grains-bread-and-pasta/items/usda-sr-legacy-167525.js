/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167525",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.3,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "3-pieces-mean-serving-weight-aggregated-over-brands",
      "kind": "unit",
      "label": "3 pieces (mean serving weight, aggregated over brands)"
    }
  ],
  "name": "Tostada shells, corn",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 64.4,
    "energy_kcal": 474.0,
    "fat_g": 23.4,
    "fibre_g": 5.8,
    "folate_ug": 0.0,
    "iron_mg": 1.53,
    "magnesium_mg": 76.0,
    "omega3_g": 0.124,
    "phosphorus_mg": 203.0,
    "potassium_mg": 237.0,
    "protein_g": 6.15,
    "salt_g": 1.6425,
    "sat_fat_g": 7.01,
    "sodium_mg": 657.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167525",
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
