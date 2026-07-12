/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "link",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174616",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    }
  ],
  "name": "Sausage, breakfast sausage, beef, pre-cooked, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 4.61,
    "energy_kcal": 327.0,
    "fat_g": 28.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.45,
    "magnesium_mg": 18.0,
    "omega3_g": 0.097,
    "phosphorus_mg": 126.0,
    "potassium_mg": 285.0,
    "protein_g": 12.9,
    "salt_g": 2.26,
    "sat_fat_g": 11.3,
    "sodium_mg": 904.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174616",
  "state": "Cooked",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
