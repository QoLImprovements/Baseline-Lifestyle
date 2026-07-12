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
  "id": "usda-sr-legacy-171541",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Soup, cheese, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 11.3,
    "energy_kcal": 342.0,
    "fat_g": 3.92,
    "fibre_g": 2.2,
    "folate_ug": 3.0,
    "iron_mg": 0.15,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 37.0,
    "protein_g": 0.8,
    "salt_g": 1.73,
    "sat_fat_g": 2.45,
    "sodium_mg": 692.0,
    "sugar_g": 3.73,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171541",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "milk-dairy-and-eggs",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
