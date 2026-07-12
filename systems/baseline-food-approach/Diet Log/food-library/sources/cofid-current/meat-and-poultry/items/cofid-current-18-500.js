/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "6 samples from fast food chains, including KFC",
  "id": "cofid-current-18-500",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken portions, battered, deep fried, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 4.8,
    "energy_kcal": 233.0,
    "fat_g": 12.8,
    "fibre_g": 2.9,
    "folate_ug": 4.0,
    "iron_mg": 0.85,
    "magnesium_mg": 28.0,
    "omega3_g": 0.39,
    "phosphorus_mg": 204.0,
    "potassium_mg": 338.0,
    "protein_g": 24.8,
    "salt_g": 1.1925,
    "sat_fat_g": 3.07,
    "sodium_mg": 477.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.65,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-500",
  "state": "Deep-fried",
  "subcategory": "MCA",
  "tags": [
    "deep-fried",
    "mca",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
