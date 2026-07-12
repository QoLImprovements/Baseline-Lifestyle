/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174599",
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
    }
  ],
  "name": "Sausage, summer, pork and beef, sticks, with cheddar cheese",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 1.82,
    "energy_kcal": 1780.0,
    "fat_g": 37.9,
    "fibre_g": 0.2,
    "folate_ug": 7.0,
    "iron_mg": 2.26,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 178.0,
    "potassium_mg": 206.0,
    "protein_g": 19.4,
    "salt_g": 3.7,
    "sat_fat_g": 10.5,
    "sodium_mg": 1480.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 225.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174599",
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
