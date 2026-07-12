/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "2-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172969",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "oz-cooked",
      "kind": "unit",
      "label": "oz cooked"
    }
  ],
  "name": "Scrapple, pork",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 14.1,
    "energy_kcal": 213.0,
    "fat_g": 13.9,
    "fibre_g": 0.3,
    "folate_ug": 5.0,
    "iron_mg": 1.89,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 158.0,
    "protein_g": 8.06,
    "salt_g": 1.205,
    "sat_fat_g": 4.73,
    "sodium_mg": 482.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 626.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172969",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
