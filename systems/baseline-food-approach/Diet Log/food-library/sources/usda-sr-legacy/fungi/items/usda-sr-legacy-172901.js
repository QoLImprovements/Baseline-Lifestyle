/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "0-5-cup-condensed",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172901",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "0-5-cup-condensed",
      "kind": "unit",
      "label": "0.5 cup condensed"
    }
  ],
  "name": "CAMPBELL'S, Cream of Mushroom Soup, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 6.59,
    "energy_kcal": 339.0,
    "fat_g": 5.5,
    "fibre_g": 0.6,
    "folate_ug": 0.0,
    "iron_mg": 0.16,
    "magnesium_mg": 3.0,
    "omega3_g": 0.354,
    "phosphorus_mg": 19.0,
    "potassium_mg": 67.0,
    "protein_g": 1.29,
    "salt_g": 1.7425,
    "sat_fat_g": 0.951,
    "sodium_mg": 697.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 22.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172901",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "fungi",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
