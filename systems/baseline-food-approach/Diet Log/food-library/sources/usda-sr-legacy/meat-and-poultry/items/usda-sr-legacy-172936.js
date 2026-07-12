/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-round",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172936",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.3,
      "key": "slice-round",
      "kind": "unit",
      "label": "slice round"
    }
  ],
  "name": "Salami, cooked, beef and pork",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 2.4,
    "energy_kcal": 1410.0,
    "fat_g": 25.9,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.56,
    "magnesium_mg": 19.0,
    "omega3_g": 0.126,
    "phosphorus_mg": 191.0,
    "potassium_mg": 316.0,
    "protein_g": 21.8,
    "salt_g": 4.35,
    "sat_fat_g": 9.32,
    "sodium_mg": 1740.0,
    "sugar_g": 0.96,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172936",
  "state": "Cooked",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
