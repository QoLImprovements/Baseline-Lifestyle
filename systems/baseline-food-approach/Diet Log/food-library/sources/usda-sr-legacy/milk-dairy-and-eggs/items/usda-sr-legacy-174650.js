/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174650",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Milk and cereal bar",
  "nutritionPerBasis": {
    "calcium_mg": 410.0,
    "carbs_g": 72.0,
    "energy_kcal": 1730.0,
    "fat_g": 11.0,
    "fibre_g": 0.4,
    "folate_ug": 98.0,
    "iron_mg": 5.99,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 155.0,
    "potassium_mg": 254.0,
    "protein_g": 6.47,
    "salt_g": 0.7975,
    "sat_fat_g": 9.11,
    "sodium_mg": 319.0,
    "sugar_g": 46.0,
    "vitamin_a_ug": 188.0,
    "vitamin_c_mg": 15.4,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174650",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "milk-dairy-and-eggs",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
