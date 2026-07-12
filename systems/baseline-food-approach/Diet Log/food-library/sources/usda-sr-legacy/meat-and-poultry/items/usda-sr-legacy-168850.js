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
  "id": "usda-sr-legacy-168850",
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
      "gramsPerUnit": 20.0,
      "key": "stick",
      "kind": "unit",
      "label": "stick"
    }
  ],
  "name": "Snacks, beef sticks, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 5.4,
    "energy_kcal": 2300.0,
    "fat_g": 49.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.4,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 257.0,
    "protein_g": 21.5,
    "salt_g": 3.825,
    "sat_fat_g": 20.8,
    "sodium_mg": 1530.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168850",
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
