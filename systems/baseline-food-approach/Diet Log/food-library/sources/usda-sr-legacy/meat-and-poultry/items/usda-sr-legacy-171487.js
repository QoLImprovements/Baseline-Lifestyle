/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171487",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "liver-cooked",
      "kind": "unit",
      "label": "liver cooked"
    }
  ],
  "name": "Turkey, all classes, liver, cooked, simmered",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.0,
    "energy_kcal": 189.0,
    "fat_g": 8.18,
    "fibre_g": 0.0,
    "folate_ug": 691.0,
    "iron_mg": 1.79,
    "magnesium_mg": 26.0,
    "omega3_g": 0.126,
    "phosphorus_mg": 312.0,
    "potassium_mg": 153.0,
    "protein_g": 27.0,
    "salt_g": 0.245,
    "sat_fat_g": 2.3,
    "sodium_mg": 98.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10800.0,
    "vitamin_c_mg": 22.6,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171487",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
