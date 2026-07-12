/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173864",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "56-grams-1-serving",
      "kind": "unit",
      "label": "56 grams 1 serving"
    }
  ],
  "name": "Ham, sliced, regular (approximately 11% fat)",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 3.63,
    "energy_kcal": 687.0,
    "fat_g": 8.8,
    "fibre_g": 1.3,
    "folate_ug": 7.0,
    "iron_mg": 1.02,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 287.0,
    "protein_g": 16.6,
    "salt_g": 2.035,
    "sat_fat_g": 0.5,
    "sodium_mg": 814.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173864",
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
