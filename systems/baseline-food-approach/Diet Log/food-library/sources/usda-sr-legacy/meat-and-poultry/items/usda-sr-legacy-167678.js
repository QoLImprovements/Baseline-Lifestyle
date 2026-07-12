/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167678",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 693.0,
      "key": "order",
      "kind": "unit",
      "label": "order"
    }
  ],
  "name": "Restaurant, Chinese, chicken and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 5.38,
    "energy_kcal": 399.0,
    "fat_g": 4.56,
    "fibre_g": 0.9,
    "folate_ug": 40.0,
    "iron_mg": 0.56,
    "magnesium_mg": 15.0,
    "omega3_g": 0.26,
    "phosphorus_mg": 73.0,
    "potassium_mg": 185.0,
    "protein_g": 8.18,
    "salt_g": 1.0325,
    "sat_fat_g": 0.77,
    "sodium_mg": 413.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 54.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167678",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "meat-and-poultry",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
