/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "2-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167551",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-approx-2-3-cup",
      "kind": "unit",
      "label": "oz (approx 2/3 cup)"
    }
  ],
  "name": "Snacks, popcorn, caramel-coated, with peanuts",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 80.7,
    "energy_kcal": 1670.0,
    "fat_g": 7.8,
    "fibre_g": 3.8,
    "folate_ug": 16.0,
    "iron_mg": 3.91,
    "magnesium_mg": 80.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 355.0,
    "protein_g": 6.4,
    "salt_g": 0.4425,
    "sat_fat_g": 1.04,
    "sodium_mg": 177.0,
    "sugar_g": 45.4,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167551",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
