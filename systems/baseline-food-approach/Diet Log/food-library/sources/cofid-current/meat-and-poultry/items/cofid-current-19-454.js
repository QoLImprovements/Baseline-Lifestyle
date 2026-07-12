/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 2 from different establishments in each of 5 regions. Consists of chicken fried in oil with saffron flavoured rice and a curry sauce that contains vegetables and coconut.",
  "id": "cofid-current-19-454",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biryani, chicken, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 16.6,
    "energy_kcal": 163.0,
    "fat_g": 7.4,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 1.33,
    "magnesium_mg": 16.0,
    "omega3_g": 0.38,
    "phosphorus_mg": 87.0,
    "potassium_mg": 170.0,
    "protein_g": 8.5,
    "salt_g": 0.6575,
    "sat_fat_g": 2.01,
    "sodium_mg": 263.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-454",
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
