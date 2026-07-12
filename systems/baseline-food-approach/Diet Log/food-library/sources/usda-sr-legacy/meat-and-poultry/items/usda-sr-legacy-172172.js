/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "steak",
  "description": "Beef Products",
  "id": "usda-sr-legacy-172172",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, loin, top sirloin cap steak, boneless, separable lean only, trimmed to 1/8\" fat, select, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.22,
    "energy_kcal": 710.0,
    "fat_g": 6.14,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.82,
    "magnesium_mg": 26.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 240.0,
    "potassium_mg": 389.0,
    "protein_g": 28.4,
    "salt_g": 0.1575,
    "sat_fat_g": 2.28,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172172",
  "state": "Grilled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
