/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "10-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-168001",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "10-pieces",
      "kind": "unit",
      "label": "10 pieces"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Candies, milk chocolate coated peanuts",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 49.7,
    "energy_kcal": 2170.0,
    "fat_g": 33.5,
    "fibre_g": 4.7,
    "folate_ug": 51.0,
    "iron_mg": 1.31,
    "magnesium_mg": 96.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 212.0,
    "potassium_mg": 502.0,
    "protein_g": 13.1,
    "salt_g": 0.1025,
    "sat_fat_g": 14.6,
    "sodium_mg": 41.0,
    "sugar_g": 37.6,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.4,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168001",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
