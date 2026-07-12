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
  "id": "usda-sr-legacy-174115",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Beverages, Carob-flavor beverage mix, powder, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 8.68,
    "energy_kcal": 75.0,
    "fat_g": 3.11,
    "fibre_g": 0.4,
    "folate_ug": 5.0,
    "iron_mg": 0.25,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 131.0,
    "protein_g": 3.16,
    "salt_g": 0.115,
    "sat_fat_g": 1.78,
    "sodium_mg": 46.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174115",
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
