/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174068",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "Dip, salsa con queso, cheese and salsa- medium",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 11.1,
    "energy_kcal": 597.0,
    "fat_g": 9.51,
    "fibre_g": 0.7,
    "folate_ug": 6.0,
    "iron_mg": 0.14,
    "magnesium_mg": 8.0,
    "omega3_g": 0.312,
    "phosphorus_mg": 200.0,
    "potassium_mg": 105.0,
    "protein_g": 3.14,
    "salt_g": 1.99,
    "sat_fat_g": 2.49,
    "sodium_mg": 796.0,
    "sugar_g": 1.95,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 1.86,
    "vitamin_k_ug": 17.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174068",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "milk-dairy-and-eggs",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
