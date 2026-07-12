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
  "id": "usda-sr-legacy-174590",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Oscar Mayer, Smokies Sausage Little Cheese (pork, turkey)",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 1.7,
    "energy_kcal": 315.0,
    "fat_g": 28.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.24,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 248.0,
    "potassium_mg": 152.0,
    "protein_g": 13.5,
    "salt_g": 2.6,
    "sat_fat_g": 11.2,
    "sodium_mg": 1040.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174590",
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
