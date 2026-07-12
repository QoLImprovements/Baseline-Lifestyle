/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "packet",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171177",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.8,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "package-without-flavor-packet",
      "kind": "unit",
      "label": "package without flavor packet"
    }
  ],
  "name": "Soup, ramen noodle, any flavor, dry",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 60.3,
    "energy_kcal": 440.0,
    "fat_g": 17.6,
    "fibre_g": 2.9,
    "folate_ug": 116.0,
    "iron_mg": 4.11,
    "magnesium_mg": 25.0,
    "omega3_g": 0.056,
    "phosphorus_mg": 115.0,
    "potassium_mg": 181.0,
    "protein_g": 10.2,
    "salt_g": 4.65,
    "sat_fat_g": 8.12,
    "sodium_mg": 1860.0,
    "sugar_g": 1.98,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.44,
    "vitamin_k_ug": 8.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171177",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "soups",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
