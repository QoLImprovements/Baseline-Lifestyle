/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "tbsp",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171629",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Ham and cheese spread",
  "nutritionPerBasis": {
    "calcium_mg": 217.0,
    "carbs_g": 2.28,
    "energy_kcal": 1020.0,
    "fat_g": 18.5,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.76,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 495.0,
    "potassium_mg": 162.0,
    "protein_g": 16.2,
    "salt_g": 3.0,
    "sat_fat_g": 8.62,
    "sodium_mg": 1200.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171629",
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
