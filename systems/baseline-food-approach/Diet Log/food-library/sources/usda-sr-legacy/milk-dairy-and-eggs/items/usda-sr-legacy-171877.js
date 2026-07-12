/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "9-5-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-171877",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 281.0,
      "key": "9-5-fl-oz",
      "kind": "unit",
      "label": "9.5 fl oz"
    }
  ],
  "name": "Beverages, coffee, ready to drink, vanilla, light, milk based, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 4.27,
    "energy_kcal": 149.0,
    "fat_g": 1.07,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 175.0,
    "protein_g": 2.14,
    "salt_g": 0.085,
    "sat_fat_g": 0.0,
    "sodium_mg": 34.0,
    "sugar_g": 3.91,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171877",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
