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
  "id": "usda-sr-legacy-171512",
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
      "gramsPerUnit": 60.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    }
  ],
  "name": "Chicken patty, frozen, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 13.6,
    "energy_kcal": 1220.0,
    "fat_g": 20.0,
    "fibre_g": 1.2,
    "folate_ug": 5.0,
    "iron_mg": 0.93,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 196.0,
    "potassium_mg": 248.0,
    "protein_g": 14.3,
    "salt_g": 1.295,
    "sat_fat_g": 4.01,
    "sodium_mg": 518.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171512",
  "state": "Frozen",
  "subcategory": "Poultry Products",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
