/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-2-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174604",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "serving-2-oz",
      "kind": "unit",
      "label": "serving 2 oz"
    }
  ],
  "name": "Sausage, Italian, turkey, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 4.65,
    "energy_kcal": 158.0,
    "fat_g": 8.75,
    "fibre_g": 0.9,
    "folate_ug": 8.0,
    "iron_mg": 9.6,
    "magnesium_mg": 25.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 185.0,
    "potassium_mg": 197.0,
    "protein_g": 15.0,
    "salt_g": 2.32,
    "sat_fat_g": 3.4,
    "sodium_mg": 928.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 30.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174604",
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
