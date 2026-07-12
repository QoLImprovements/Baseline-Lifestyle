/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "egg",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172189",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "egg",
      "kind": "unit",
      "label": "egg"
    }
  ],
  "name": "Egg, duck, whole, fresh, raw",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 1.45,
    "energy_kcal": 776.0,
    "fat_g": 13.8,
    "fibre_g": 0.0,
    "folate_ug": 80.0,
    "iron_mg": 3.85,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 222.0,
    "protein_g": 12.8,
    "salt_g": 0.365,
    "sat_fat_g": 3.68,
    "sodium_mg": 146.0,
    "sugar_g": 0.93,
    "vitamin_a_ug": 194.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172189",
  "state": "Raw",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
