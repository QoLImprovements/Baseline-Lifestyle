/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-large",
  "description": "Snacks",
  "id": "usda-sr-legacy-167536",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "piece-large",
      "kind": "unit",
      "label": "piece, large"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, beef jerky, chopped and formed",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 11.0,
    "energy_kcal": 410.0,
    "fat_g": 25.6,
    "fibre_g": 1.8,
    "folate_ug": 134.0,
    "iron_mg": 5.42,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 407.0,
    "potassium_mg": 597.0,
    "protein_g": 33.2,
    "salt_g": 4.45,
    "sat_fat_g": 10.8,
    "sodium_mg": 1780.0,
    "sugar_g": 9.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167536",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "meat-and-poultry",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
