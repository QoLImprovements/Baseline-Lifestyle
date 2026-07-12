/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "1-41-oz-dry-half-noodle-block",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171822",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-41-oz-dry-half-noodle-block",
      "kind": "unit",
      "label": "1.41 oz dry (half noodle block)"
    }
  ],
  "name": "Soup, ramen noodle, dry, any flavor, reduced fat, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 71.0,
    "energy_kcal": 1460.0,
    "fat_g": 2.5,
    "fibre_g": 2.7,
    "folate_ug": 122.0,
    "iron_mg": 4.52,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 117.0,
    "potassium_mg": 128.0,
    "protein_g": 10.9,
    "salt_g": 3.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 1200.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171822",
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
