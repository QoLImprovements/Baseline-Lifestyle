/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172686",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, wheat",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 47.5,
    "energy_kcal": 1140.0,
    "fat_g": 4.53,
    "fibre_g": 4.0,
    "folate_ug": 85.0,
    "iron_mg": 3.6,
    "magnesium_mg": 41.0,
    "omega3_g": 0.159,
    "phosphorus_mg": 129.0,
    "potassium_mg": 141.0,
    "protein_g": 10.7,
    "salt_g": 1.1825,
    "sat_fat_g": 0.697,
    "sodium_mg": 473.0,
    "sugar_g": 5.73,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172686",
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
