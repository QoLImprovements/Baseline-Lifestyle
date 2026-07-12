/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-168130",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Frozen novelties, ice cream type, chocolate or caramel covered, with nuts",
  "nutritionPerBasis": {
    "calcium_mg": 252.0,
    "carbs_g": 30.9,
    "energy_kcal": 1350.0,
    "fat_g": 20.2,
    "fibre_g": 0.6,
    "folate_ug": 11.0,
    "iron_mg": 0.72,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 238.0,
    "protein_g": 4.4,
    "salt_g": 0.23,
    "sat_fat_g": 12.7,
    "sodium_mg": 92.0,
    "sugar_g": 30.0,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168130",
  "state": "Frozen",
  "subcategory": "Sweets",
  "tags": [
    "frozen",
    "milk-dairy-and-eggs",
    "sweets"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
