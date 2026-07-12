/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar-gerber-second-food-4-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-169049",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-second-food-4-oz",
      "kind": "unit",
      "label": "jar Gerber Second Food (4 oz)"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, green beans and turkey, strained",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 5.35,
    "energy_kcal": 51.0,
    "fat_g": 1.5,
    "fibre_g": 1.4,
    "folate_ug": 29.0,
    "iron_mg": 0.7,
    "magnesium_mg": 22.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 56.0,
    "potassium_mg": 188.0,
    "protein_g": 4.1,
    "salt_g": 0.0275,
    "sat_fat_g": 0.5,
    "sodium_mg": 11.0,
    "sugar_g": 1.39,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 14.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169049",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
