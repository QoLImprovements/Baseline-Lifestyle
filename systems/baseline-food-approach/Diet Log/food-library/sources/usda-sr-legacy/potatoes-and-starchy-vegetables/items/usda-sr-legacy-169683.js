/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-169683",
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
      "gramsPerUnit": 170.0,
      "key": "bag-6-oz",
      "kind": "unit",
      "label": "bag (6 oz)"
    }
  ],
  "name": "Snacks, potato chips, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 66.9,
    "energy_kcal": 1970.0,
    "fat_g": 20.8,
    "fibre_g": 5.9,
    "folate_ug": 27.0,
    "iron_mg": 1.35,
    "magnesium_mg": 89.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 193.0,
    "potassium_mg": 1740.0,
    "protein_g": 7.1,
    "salt_g": 1.4275,
    "sat_fat_g": 4.16,
    "sodium_mg": 571.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 25.7,
    "vitamin_e_mg": 5.47,
    "vitamin_k_ug": 13.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169683",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
