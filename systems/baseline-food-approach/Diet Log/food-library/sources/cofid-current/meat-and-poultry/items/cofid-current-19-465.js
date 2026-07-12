/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 sub-samples, 2 from different establishments in each of 5 regions. Dish consists of chicken that has been stir fried in a standard Thai green curry sauce (usually includes coconut milk, lemongrass, ginger and peppers)",
  "id": "cofid-current-19-465",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chicken, Thai green, takeaway and restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 1.5,
    "energy_kcal": 119.0,
    "fat_g": 8.7,
    "fibre_g": 2.6,
    "folate_ug": 7.0,
    "iron_mg": 1.32,
    "magnesium_mg": 25.0,
    "omega3_g": 0.24,
    "phosphorus_mg": 87.0,
    "potassium_mg": 224.0,
    "protein_g": 8.8,
    "salt_g": 1.375,
    "sat_fat_g": 5.29,
    "sodium_mg": 550.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-465",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
