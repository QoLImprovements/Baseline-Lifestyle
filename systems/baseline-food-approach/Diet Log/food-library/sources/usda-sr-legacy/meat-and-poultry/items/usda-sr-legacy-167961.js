/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167961",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Snacks, pork skins, plain",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 0.0,
    "energy_kcal": 544.0,
    "fat_g": 31.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.88,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 127.0,
    "protein_g": 61.3,
    "salt_g": 4.55,
    "sat_fat_g": 11.4,
    "sodium_mg": 1820.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167961",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "meat-and-poultry",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
