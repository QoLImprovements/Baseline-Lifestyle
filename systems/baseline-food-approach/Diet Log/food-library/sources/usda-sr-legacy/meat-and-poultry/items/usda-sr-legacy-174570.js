/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-rectangle",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174570",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.8,
      "key": "slice-rectangle",
      "kind": "unit",
      "label": "slice rectangle"
    },
    {
      "gramsPerUnit": 9.3,
      "key": "slice-oval",
      "kind": "unit",
      "label": "slice oval"
    }
  ],
  "name": "Roast beef, deli style, prepackaged, sliced",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.64,
    "energy_kcal": 115.0,
    "fat_g": 3.69,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 2.05,
    "magnesium_mg": 20.0,
    "omega3_g": 0.037,
    "phosphorus_mg": 242.0,
    "potassium_mg": 647.0,
    "protein_g": 18.6,
    "salt_g": 2.1325,
    "sat_fat_g": 1.32,
    "sodium_mg": 853.0,
    "sugar_g": 0.29,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174570",
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
