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
  "id": "usda-sr-legacy-173219",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 265.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Beverages, Malted drink mix, natural, with added nutrients, powder, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 10.7,
    "energy_kcal": 359.0,
    "fat_g": 3.21,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.36,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 200.0,
    "protein_g": 3.67,
    "salt_g": 0.18,
    "sat_fat_g": 1.83,
    "sodium_mg": 72.0,
    "sugar_g": 8.37,
    "vitamin_a_ug": 281.0,
    "vitamin_c_mg": 10.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173219",
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
