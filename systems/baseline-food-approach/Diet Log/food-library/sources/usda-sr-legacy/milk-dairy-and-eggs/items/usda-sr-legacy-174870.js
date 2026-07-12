/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174870",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 266.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Beverages, Strawberry-flavor beverage mix, powder, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 12.3,
    "energy_kcal": 368.0,
    "fat_g": 3.1,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.08,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 139.0,
    "protein_g": 3.0,
    "salt_g": 0.12,
    "sat_fat_g": 1.91,
    "sodium_mg": 48.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174870",
  "state": "Raw",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
