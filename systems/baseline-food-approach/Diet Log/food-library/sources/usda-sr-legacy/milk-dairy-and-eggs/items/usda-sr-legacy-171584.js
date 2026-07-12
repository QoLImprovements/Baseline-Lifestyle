/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171584",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, cheese sauce mix, dry",
  "nutritionPerBasis": {
    "calcium_mg": 204.0,
    "carbs_g": 60.5,
    "energy_kcal": 1830.0,
    "fat_g": 18.3,
    "fibre_g": 1.0,
    "folate_ug": 134.0,
    "iron_mg": 0.5,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 283.0,
    "potassium_mg": 428.0,
    "protein_g": 7.68,
    "salt_g": 8.0,
    "sat_fat_g": 8.44,
    "sodium_mg": 3200.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171584",
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
