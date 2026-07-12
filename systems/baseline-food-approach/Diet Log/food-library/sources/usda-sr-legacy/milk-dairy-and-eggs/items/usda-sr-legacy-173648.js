/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "6-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-173648",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "6-fl-oz",
      "kind": "unit",
      "label": "6 fl oz"
    }
  ],
  "name": "Beverages, coffee substitute, cereal grain beverage, powder, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 5.6,
    "energy_kcal": 272.0,
    "fat_g": 3.3,
    "fibre_g": 0.1,
    "folate_ug": 5.0,
    "iron_mg": 0.11,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 172.0,
    "protein_g": 3.3,
    "salt_g": 0.1225,
    "sat_fat_g": 2.06,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173648",
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
